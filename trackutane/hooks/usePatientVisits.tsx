import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_VISITS } from "../graphql/queries";

function usePatientVisits(userId: string) {
  const { loading, error, data } = useQuery(GET_VISITS);
  const [visits, setVisits] = useState<Visit[]>([]);

  useEffect(() => {
    if (!data) return;

    const visits: Visit[] = data.getVisits.map(({ value }: VisitResponse) => ({
      visitDate: value.visitDate,
      visitTime: value.visitTime,
      provider: value.provider,
      visitId: value.visitId,
      tracking: value.tracking,
    }));

    const patientVisits = visits.filter(
      (visit) => visit.tracking.patient_id == userId
    );

    setVisits(patientVisits);
  }, [data, userId]);

  return { loading, error, visits };
}

export default usePatientVisits;
