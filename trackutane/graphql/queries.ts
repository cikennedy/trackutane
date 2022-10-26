import { gql } from "@apollo/client";

export const GET_PATIENTS = gql`
  query GetPatients {
    getPatients {
      value {
        address
        address2
        birthDate
        city
        dateAdded
        effectiveDate
        email
        firstName
        group
        insuranceBack
        insuranceFront
        insuranceProvider
        lastName
        memberID
        phone
        state
        zipCode
      }
      name
    }
  }
`;

export const GET_VISITS = gql`
  query GetVisits {
    getVisits {
      name
      value {
        date
        provider
        visitId
        tracking {
          patient_id
          visitDetails {
            billing
            cptCode
            cumulativeDosage
            nextVisit
            notes
            visitDosage
          }
          patient {
            address
            address2
            birthDate
            city
            dateAdded
            effectiveDate
            email
            firstName
            group
            insuranceBack
            insuranceFront
            insuranceProvider
            lastName
            memberID
            phone
            state
            zipCode
          }
        }
      }
    }
  }
`;
