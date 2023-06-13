import React, { useState, useEffect } from 'react';
import { getReportList } from '../../daily_report/api/DailyReport';
import { Content } from '../../daily_report/components/home/Content';
import { HomeContentEntity } from "../../daily_report/domain/HomeContentEntity";

const HomeView = () => {
  const [entities, setEntities] = useState<HomeContentEntity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReportList()
      .then((values: HomeContentEntity[]) => {
        setEntities(values);
        setLoading(false);
      })
  }, []);

  return (
    <div>
      { loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          { entities.map( entity => <Content key={ entity.id } { ...entity } /> ) }
        </div>
      ) }
    </div>
  );
};

export default HomeView
