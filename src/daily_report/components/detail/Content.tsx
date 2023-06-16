import React from 'react';

import { DetailContentEntity } from "../../domain/DetailContentEntity";

export const Content = (entity: DetailContentEntity) => {
  return (
    <div>
      <h1>{ entity.date }</h1>
      <h2>大学のこと</h2>
      <div>{ entity.univ }</div>
      <h2>勉強</h2>
      <div>{ entity.study }</div>
      <h2>その他</h2>
      <div>{ entity.other }</div>
      <h2>初めましてだったこと</h2>
      <div>{ entity.first_meet }</div>
      <h2>やりたいこと</h2>
      <div>{ entity.wanna_do }</div>
      <h2>1日のまとめ</h2>
      <div>{ entity.summary }</div>
    </div>
  );
};
