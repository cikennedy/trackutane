type Patient = {
  dateAdded: date;
  name: string;
  address: string;
  city: string;
  zipCode: number;
  phone: string;
  email: string;
};

type PatientList = {
  name: IDBCursor;
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
