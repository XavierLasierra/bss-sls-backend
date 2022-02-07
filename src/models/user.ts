export interface SWUser {
  id: string;
  deviceId?: string;
  createdTs: Date;
  lastLoginTs: Date;
  lastModifiedTs: Date;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profileImageUrl?: string;
  description?: string;
  stripeCustomerId?: string;
  isPremium: boolean;
}
