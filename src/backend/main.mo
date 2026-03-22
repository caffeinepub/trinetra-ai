import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";

actor {
  type Id = Principal;

  type DemoRequest = {
    name : Text;
    email : Text;
    message : Text;
  };

  module DemoRequest {
    public func compare(demoRequest1 : DemoRequest, demoRequest2 : DemoRequest) : Order.Order {
      Text.compare(demoRequest1.email, demoRequest2.email);
    };
  };

  // Persistent data
  let admins = Map.empty<Id, ()>();
  let demoRequests = Map.empty<Id, DemoRequest>();

  /// Submit a new demo request.
  public shared ({ caller }) func submitDemoRequest(name : Text, email : Text, message : Text) : async () {
    let newRequest : DemoRequest = { name; email; message };
    demoRequests.add(caller, newRequest);
  };

  /// Check if the caller has an existing demo request.
  public query ({ caller }) func hasDemoRequest() : async Bool {
    demoRequests.containsKey(caller);
  };

  /// Get your own demo request.
  public query ({ caller }) func getMyDemoRequest() : async ?DemoRequest {
    demoRequests.get(caller);
  };

  /// Remove your demo request.
  public shared ({ caller }) func removeMyDemoRequest() : async () {
    demoRequests.remove(caller);
  };

  /// Get all demo requests (admin only).
  public shared ({ caller }) func getAllDemoRequests() : async [DemoRequest] {
    if (not admins.containsKey(caller)) { return [] };
    demoRequests.values().toArray().sort();
  };

  /// Check if the caller is an admin.
  public query ({ caller }) func isAdmin() : async Bool {
    admins.containsKey(caller);
  };

  /// Add a new admin (admin only).
  public shared ({ caller }) func addAdmin(newAdmin : Principal) : async Bool {
    if (not admins.containsKey(caller)) { return false };
    admins.add(newAdmin, ());
    true;
  };

  /// Remove yourself from admins.
  public shared ({ caller }) func removeSelfAsAdmin() : async () {
    admins.remove(caller);
  };

  /// Initialize the canister (first admin).
  public shared ({ caller }) func initialize() : async () {
    if (admins.isEmpty()) {
      admins.add(caller, ());
    };
  };
};
