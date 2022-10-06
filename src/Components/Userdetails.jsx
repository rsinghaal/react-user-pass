import axios from 'axios';

const Userdetails = {
  users: [],
  all: function () {
    return axios
      .get('https://gpdigitalmarketing.com.au/user.json')
      .then((res) => {
        this.users = res.data;
        return this.users;
      });
  },
};

export default Userdetails;
