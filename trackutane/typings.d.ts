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

type TrackingDetail = {
  patient_id: ID;
  patient: Patient;
  visitDetails: VisitDetail[];
};

type VisitDetail = {
  visitDosage: number;
  cumulativeDosage: number;
  notes: string;
  cptCode: number;
  billing: number;
  nextVisit: string;
};

type Visit = {
  date: string;
  provider: string;
  visitId: number;
  tracking: number;
};

type VisitResponse = {
  value: Visit;
};

type PatientResponse = {
  name: ID;
  value: Patient;
};
