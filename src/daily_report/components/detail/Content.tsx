import React from 'react';

import { DetailContentEntity } from "../../domain/DetailContentEntity";
import { marked } from "marked";

export const Content = (entity: DetailContentEntity) => {
  return (
    <div>
      <h1>{ entity.date }</h1>
      <h2>大学のこと</h2>
      <div dangerouslySetInnerHTML={{ __html: `${marked(`${ entity.univ }`)}` }} className="detail-content"></div>
      <h2>勉強</h2>
      <div dangerouslySetInnerHTML={{ __html: `${marked(`${ entity.study }`)}` }} className="detail-content"></div>
      <h2>その他</h2>
      <div dangerouslySetInnerHTML={{ __html: `${marked(`${ entity.other }`)}` }} className="detail-content"></div>
      <h2>初めましてだったこと</h2>
      <div dangerouslySetInnerHTML={{ __html: `${marked(`${ entity.first_meet }`)}` }} className="detail-content"></div>
      <h2>やりたいこと</h2>
      <div dangerouslySetInnerHTML={{ __html: `${marked(`${ entity.wanna_do }`)}` }} className="detail-content"></div>
      <h2>1日のまとめ</h2>
      <div dangerouslySetInnerHTML={{ __html: `${marked(`${ entity.summary }`)}` }} className="detail-content"></div>
    </div>
  );
};
