import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRequest = (initUrl) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	useEffect(() => {
		let ignore = false;
		const fetch = async () => {
			try {
				setLoading(true);
				const res = await axios(initUrl);
				if (!ignore) setData(res.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};
		fetch();
		return (() => { ignore = true; });
	}, [initUrl]);
	return { data, loading, error };
};

// export const useReqForState = (url) => {
// 	const [data, setData] = useState({});
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState({});
// 	useEffect(() => {
// 		let ignore = false;
// 		const fetch = async () => {
// 			try {
// 				setLoading(true);
// 				const res = await axios(initUrl);
// 				if (!ignore) setData(res.data);
// 			} catch (err) {
// 				setError(err);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};
// 		fetch();
// 		return (() => { ignore = true; });
// 	}, [initUrl]);
// 	return data;
// }