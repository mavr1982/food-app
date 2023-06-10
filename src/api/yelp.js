import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Cl-5b6GhJ4TOamOPad53lXSVxN5Tk40SvsvhaEdYWAB76BXJShrLpyHSCQULLUZow52uUq6GZOp9JigY-xTpF-et94m73oD02ctl7WMMONaoyPod-fiErYQPjxeDZHYx'
    },
});