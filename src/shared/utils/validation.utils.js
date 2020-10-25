const Validation = {
    required: (val) => { return val && val.length },
    maxLength: (len) => (val) => { return !(val) || (val.length <= len)},
    minLength: (len) => (val) => { return val && (val.length >= len) },
    // eslint-disable-next-line no-useless-escape
    isPhoneNumber: (val) => { return /^[+][0-9]{1,4}[\./0-9]{3,8}/.test(val)},
    // eslint-disable-next-line no-useless-escape
    validEmail: (val) => { return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(val)},
};
export default Validation;