import request from "./http"
import params from "./params"

console.log(params);
var url1="/json1811.ashx";
class Apls{
	joke(data){
		return request({
			method:"get",
			url:"/joke",
			params:data
		})
	}

	GetBannerList(data){
		return request({
			method:"get",
			url:url1,
			params:data
		})
	}
}


export default new Apls();