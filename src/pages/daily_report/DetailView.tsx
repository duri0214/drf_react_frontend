import React, { useState, useEffect } from 'react';
import { getReportDetail } from "../../daily_report/api/DailyReport";
import { Content } from "../../daily_report/components/detail/Content";
import { DetailContentEntity } from "../../daily_report/domain/DetailContentEntity";
import { useParams } from "react-router-dom";

const DetailView: React.FC = () => {
  const [entity, setEntity] = useState<DetailContentEntity>({} as DetailContentEntity)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // get url param
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getReportDetail(id)
        .then((values: DetailContentEntity) => {
          setEntity(values)
          setLoading(false)
        })
        .catch((e: Error) => {
          setError(e.message);
          setLoading(false);
        });
    }
  },[id])

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      { loading ? (
        <h1>loading....</h1>
      ) : (
        <Content key={ entity.id } { ...entity } />
      ) }
    </div>
  );
};

export default DetailView
