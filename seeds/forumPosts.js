const { ForumPost } = require('../models')

const forumPostData = [
    {
        title: 'Who is available tomorrow for a raid?',
        body: "Elit ut aliquam purus sit amet luctus venenatis lectus. Augue neque gravida in fermentum et. Odio tempor orci dapibus ultrices in iaculis nunc sed. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Consectetur purus ut faucibus pulvinar elementum integer. Donec massa sapien faucibus et molestie ac feugiat. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Nunc congue nisi vitae suscipit. Lobortis mattis aliquam faucibus purus. Congue eu consequat ac felis. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Nullam non nisi est sit amet facilisis magna etiam tempor. Tincidunt id aliquet risus feugiat.",
        user_id: 1,
        created_at: 'May 1, 2023 08:30:00',
        game_id: 1,
    },
    {
        title: 'Fave build for Warlock?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Elementum eu facilisis sed odio morbi quis commodo odio. Quam elementum pulvinar etiam non quam. Urna duis convallis convallis tellus id. Faucibus purus in massa tempor nec. Tortor id aliquet lectus proin nibh. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Velit sed ullamcorper morbi tincidunt ornare. Natoque penatibus et magnis dis parturient montes nascetur.',
        user_id: 2,
        created_at: 'May 2, 2023 07:45:00',
        game_id: 2,
    },
    {
        title: "I'll be online tonight at 10pm if anyone needs help",
        body: "Vulputate ut pharetra sit amet aliquam id diam. Mauris augue neque gravida in fermentum et sollicitudin. Habitasse platea dictumst quisque sagittis purus. Tristique senectus et netus et malesuada fames ac turpis. Eu turpis egestas pretium aenean pharetra magna. Ipsum dolor sit amet consectetur adipiscing. Lectus proin nibh nisl condimentum id venenatis. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Leo duis ut diam quam. Netus et malesuada fames ac turpis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Sit amet nulla facilisi morbi tempus iaculis urna. Fermentum et sollicitudin ac orci. Tortor pretium viverra suspendisse potenti nullam. Convallis a cras semper auctor neque vitae. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Dignissim cras tincidunt lobortis feugiat vivamus at. Ut sem nulla pharetra diam sit.",
        user_id: 3,
        created_at: 'May 2, 2023 09:30:00',
        game_id: 2,
    },
    {
        title: "Can't wait for the new expansion!",
        body: "Integer vitae justo eget magna fermentum iaculis. Diam ut venenatis tellus in. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Quam viverra orci sagittis eu volutpat odio facilisis. Risus sed vulputate odio ut enim blandit. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Id semper risus in hendrerit gravida rutrum quisque. Gravida neque convallis a cras semper auctor neque vitae. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Est velit egestas dui id. Mi proin sed libero enim. Massa eget egestas purus viverra accumsan in. Eget egestas purus viverra accumsan in nisl nisi. Cursus risus at ultrices mi.",
        user_id: 4,
        created_at: 'May 3, 2023 08:30:00',
        game_id: 2,
    },
];

const seedPosts = () => ForumPost.bulkCreate(forumPostData);

module.exports = seedPosts;