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
        provider
        visitDate
        visitTime
        visitId
        tracking {
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
          visitDetails {
            billing
            cptCode
            cumulativeDosage
            goalDosage
            height
            nextVisitDate
            nextVisitTime
            notes
            visitDosage
            weight
          }
        }
      }
    }
  }
`;
