import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface DemoRequest {
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    /**
     * / Add a new admin (admin only).
     */
    addAdmin(newAdmin: Principal): Promise<boolean>;
    /**
     * / Get all demo requests (admin only).
     */
    getAllDemoRequests(): Promise<Array<DemoRequest>>;
    /**
     * / Get your own demo request.
     */
    getMyDemoRequest(): Promise<DemoRequest | null>;
    /**
     * / Check if the caller has an existing demo request.
     */
    hasDemoRequest(): Promise<boolean>;
    /**
     * / Initialize the canister (first admin).
     */
    initialize(): Promise<void>;
    /**
     * / Check if the caller is an admin.
     */
    isAdmin(): Promise<boolean>;
    /**
     * / Remove your demo request.
     */
    removeMyDemoRequest(): Promise<void>;
    /**
     * / Remove yourself from admins.
     */
    removeSelfAsAdmin(): Promise<void>;
    /**
     * / Submit a new demo request.
     */
    submitDemoRequest(name: string, email: string, message: string): Promise<void>;
}
