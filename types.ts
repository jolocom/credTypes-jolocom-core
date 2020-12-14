export type ContextEntry = string | { [key: string]: ContextEntry }
export type ClaimInterface = {
  [key: string]: string | number | boolean
}

export interface BaseMetadata {
  type: string[]
  name: string
  context?: ContextEntry[]
  claimInterface?: {
    [key: string]: string | number | boolean | ClaimInterface | undefined
  }
}

export interface EmailClaimMetadata extends BaseMetadata {
  claimInterface?: {
    email: string
  }
}

export interface MobilePhoneNumberClaimMetadata extends BaseMetadata {
  claimInterface?: {
    telephone: string
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

export interface PostalAddressClaimMetadata extends BaseMetadata {
  claimInterface?: {
    addressLine1: "schema:streetAddress",
    addressLine2?: "schema:streetAddress",
    postalCode: "schema:postalCode",
    city: "schema:addressLocality",
    country: "schema:addressCountry"
  }
}

export interface BusinessCardClaimMetadata extends BaseMetadata {
  claimInterface?: {
    givenName: string
    familyName: string
    email: string
    telephone: string
    legalCompanyName: "schema:legalName"
  }
}

export interface ClaimsMetadataSummary {
  emailAddress: EmailClaimMetadata
  mobilePhoneNumber: MobilePhoneNumberClaimMetadata
  name: NameClaimMetadata
  publicProfile: PublicProfileClaimMetadata
  postalAddress: PostalAddressClaimMetadata
  businessCard: BusinessCardClaimMetadata
}
