import axios from "axios";

export const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    // withCredentials: true,
    // withXSRFToken: true
})



export const POST_ADD_PRODUCT = async (post_data, cb) => {
    if (!post_data) return cb(true, null)

    instance.post('/process/control/product/process/first/receive/with/label', post_data).then(({data}) => {
        cb(false, data)
    }).catch(({response}) => {
        cb(response, null)
    })
}


export const POST_PRODUCT_PROCESS = async (post_data, cb) => {
    if (!post_data) return cb(true, null)


    instance.post('/process/control/product/process/payment/receive/and/cash/mamo/print', post_data).then(({data}) => {
        cb(false, data)
    }).catch(({response}) => {
        cb(response, null)
    })
}


export const POST_CATEGORY = async (post_data, cb) => {
    if (!post_data) return cb(true, null)


    instance.post('/admin_control/product/category/entry', post_data).then(({data}) => {
        cb(false, data)
    }).catch(({response}) => {
        cb(response, null)
    })
}



export const POST_SUB_CATEGORY = async (post_data, cb) => {
    if (!post_data) return cb(true, null)


    instance.post('/admin_control/product/sub/category/entry', post_data).then(({data}) => {
        cb(false, data)
    }).catch(({response}) => {
        cb(response, null)
    })
}



export const POST_SELL_PRODUCTS = async (post_data, cb) => {
    if (!post_data) return cb(true, null)


    instance.post('saler/product/sale/entry', post_data).then(({data}) => {
        cb(false, data)
    }).catch(({response}) => {
        cb(response, null)
    })
}