import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
	const res = axios.get("/api/current_user");
	dispatch({ type: FETCH_USER, payload: res.data });
};

//pass in relative path to backend server
//in dev env we make use of proxy to send response to react app
//in prod env there is no use of proxy

//Can have no return and no outer curly bracket IF there is only one action in function component
