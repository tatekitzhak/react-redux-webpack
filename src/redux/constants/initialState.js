export default {
    error: null,
    loading: false,
    postIds: [],
    posts: {},
    commentIds: [],
    comments: {},
    // pagination: {
    //     first: `${process.env
    //         .ENDPOINT}/posts?_page=1&_sort=date&_order=DESC&
    //  _embed=comments&_expand=user&_embed=likes`,
    //     next: null,
    //     prev: null,
    //     last: null
    // },
    user: {
        authenticated: false,
        profilePicture: null,
        id: null,
        name: null,
        token: null
    },
    num: 0,
    allNames: [],
    arr: {
        data: [
            {
                id: 0,
                title: 'title 1'
            },
            {
                id: 1,
                title: 'title 2'
            },
            {
                id: 2,
                title: 'title 3'
            },
            {
                id: 3,
                title: 'title 4'
            },
            {
                id: 4,
                title: 'title 5'
            },
            {
                id: 5,
                title: 'title 6'
            },
            {
                id: 6,
                title: 'title 7'
            },
            {
                id: 7,
                title: 'title 8'
            }
        ],
        dataLength: null
    }
};


