import { makeVar } from '@apollo/client';

export const onPageLoad = makeVar(9);

const initialDataPoint = (params) => {
    if (params === 'more') {
        return onPageLoad(onPageLoad() + 3);
    } else if (params === 'less') {
        return onPageLoad(onPageLoad() - 3);
    } else {
        return onPageLoad();
    }
}

export default initialDataPoint;
