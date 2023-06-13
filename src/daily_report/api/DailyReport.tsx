const toJson = async (res: Response) => {
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error(json.message);
  }
};

// apiにアクセスして日記のリストを取得します
export const getReportList = async () => {
  const res = await fetch('http://localhost:8000/daily_report/', {
    method: 'GET',
  });
  return await toJson(res);
};

// apiにアクセスして日記の詳細を取得します
export const getReportDetail = async (id: string) => {
  const res = await fetch(`http://localhost:8000/daily_report/${id}`, {
    method: 'GET',
  });
  return await toJson(res);
};
