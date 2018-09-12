export type validContextEntry = string | { [key: string]: validContextEntry }

export interface BaseMetadata {
  type: string[]
  name: string
  context?: validContextEntry[]
  claimInterface?: {}
}

export interface EmailClaimMetadata extends BaseMetadata {
  claimInterface?: {
    email: string
  }
}

export interface MobilePhoneNumberClaimMetadata extends BaseMetadata {
  claimInterface?: {
    mobilePhoneNumber: string
  }
}

export interface NameClaimMetadata extends BaseMetadata {
  claimInterface?: {
    givenName: string
    familyName: string
  }
}

export interface PublicProfileClaimMetadata extends BaseMetadata {
  claimInterface?: {
    name: string
    description: string
    image?: string
    url?: string
  }
}

export interface ClaimsMetadataSummary {
  emailAddress: EmailClaimMetadata
  mobilePhoneNumber: MobilePhoneNumberClaimMetadata
  name: NameClaimMetadata
  publicProfile: PublicProfileClaimMetadata
}