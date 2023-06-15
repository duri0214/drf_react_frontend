// apiにアクセスして日記のリストを取得します
export const getReportList = async () => {
  const res = await fetch('http://localhost:8000/daily_report/', {
    method: 'GET',
  });
  return await res.json();
};

// apiにアクセスして日記の詳細を取得します
export const getReportDetail = async (id: string) => {
    const res = await fetch( `http://localhost:8000/daily_report/${id}`, {
      method: 'GET',
    });
    if (res.ok) {
      return await res.json();
    } else {
      // 検索結果 0件
      throw new Error(`id: ${id} では日記を取得できませんでした`);
    }
};
