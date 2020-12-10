import { hostname } from "os";

const tesApi = (day: string, query: string) => {
  return `/api/test/data?day=${day}&query=${query}`;
};

export const signIn = () => {
    return `/user/signin`;
}


export const getDonationList = (size: number) => {
    return `/regular-donation?size=${size}`;
}

export const getDonationPageData = (page: number, size: number, name: string ="") => {
    return `/regular-donation?page=${page}&size=${size}&search=${name}`;
}

export const searchWithCategory = (page: number, size: number, category: string="") => {
    return `/regular-donation/category?page=${page}&size=${size}&category=${category}`;
}

export const getDonationDetails = (id: number) => {
    return `/regular-donation/${id}`;
}

export const getAllPartyList = () => {
    return `/party/all`;
}

export const getAllOttList = () => {
    return `/ott/all`;
}

export const makeParty = () => {
    return `/party`;
}

export const fastMatching = () => {
    return `/party/fast`;
}

export const participantParty = () => {
    return `/party/participant`;
}

export const getMyParty = (userId: string | null) => {
    return `/party/my-party?userId=${userId}`;
}


export default {
  tesApi,
  signIn,
  getDonationList,
  getDonationPageData,
  searchWithCategory,
  getDonationDetails,
  getAllPartyList,
  getAllOttList,
  makeParty,
  fastMatching,
  participantParty,
  getMyParty
};