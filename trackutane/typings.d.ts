type Patient = {
  dateAdded: string;
  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zipCode: number;
  phone: string;
  email: string;
  birthDate: string;
  insuranceFront: string;
  insuranceBack: string;
  insuranceProvider: string;
  memberID: string;
  group: string;
  effectiveDate: string;
};

type PatientList = {
  name: ID;
  value: Patient;
};

type Visit = {
  provider: string;
  date: date;
  visitDosage: number;
  cumulativeDosage: number;
  nextVisit: date;
  notes: string;
};

type VisitResponse = {
  value: Visit;
};

type PatientResponse = {
  name: ID;
  value: Patient;
};
