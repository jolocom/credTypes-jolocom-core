import { ClaimsMetadataSummary } from "./types"

export const claimsMetadata : ClaimsMetadataSummary = {
  emailAddress: {
    type: ['Credential', 'ProofOfEmailCredential'],
    name: 'Email address',
    context: [
      {
        ProofOfEmailCredential: 'https://identity.jolocom.com/terms/ProofOfEmailCredential'
      }
    ]
  },
  mobilePhoneNumber: {
    type: ['Credential', 'ProofOfMobilePhoneNumberCredential'],
    name: 'Mobile Phone Number',
    context: [
      {
        ProofOfMobilePhoneNumberCredential: 'https://identity.jolocom.com/terms/ProofOfMobilePhoneNumberCredential'
      }
    ]
  },
  name: {
    type: ['Credential', 'ProofOfNameCredential'],
    name: 'Name',
    context: [
      {
        ProofOfNameCredential: 'https://identity.jolocom.com/terms/ProofOfNameCredential'
      }
    ]
  },
  publicProfile: {
    type: ['Credential', 'PublicProfileCredential'],
    name: 'Public Profile',
    context: [
      {
        PublicProfileCredential: 'https://identity.jolocom.com/terms/PublicProfileCredential'
      }
    ]

  }
}