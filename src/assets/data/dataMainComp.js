//questo nn riesco a prendere le img
const newCourses = [
  {
    image: require('../img/photo-1496307042754-b4aa456c4a2d-370x200.jpeg'),
    name: 'How to be a DJ Make Electronic Music',
    subtitle: 'Electronic',
    special: true,
    level: 'Advanced',
    lectures: 8,
    courseHours: 6
  },
  {
    image: require('../img/12345-1-370x200.png'),
    name: 'Nvidia UE$ Technologies Practice',
    subtitle: 'Nvidia',
    special: true,
    level: 'Advanced',
    lectures: 8,
    courseHours: 6
  },
  {
    image: require('../img/photo-1491897554428-130a60dd4757-370x200.jpeg'),
    name: 'Fashon Photography from professional',
    subtitle: 'Fashon',
    special: true,
    level: 'Advanced',
    lectures: 6,
    courseHours: 6
  },
  {
    image: require('../img/photo-1416339134316-0e91dc9ded92-370x200.jpeg'),
    name: 'Design Instruments for Comunication',
    subtitle: 'Comunication',
    special: false,
    level: 'Intermediate',
    lectures: 6,
    courseHours: 6
  },
  {
    image: require('../img/cathryn-lavery-67852-unsplash-740x400.jpg'),
    name: 'Make your concept Right and Beautiful',
    subtitle: 'Art',
    special: false,
    level: 'Intermediate',
    lectures: 6,
    courseHours: 6
  },
  {
    image: require('../img/photo-1475452779376-caebfb988090-370x200.jpeg'),
    name: 'Road bike Manual or How to Be a Champion',
    subtitle: 'Bycicling',
    special: false,
    level: 'Beginner',
    lectures: 6,
    courseHours: 6
  }
]

const whyCourses= [
  {
    title: 'Enterpreneurship',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, libero similique eum accusantium quae veritatis, beatae expedita neque saepe, a quod ex odio quibusdam voluptatem provident laborum suscipit. Quidem, laudantium.',
    icon: 'fa-briefcase'
  },
  {
    title: 'Accelerated learning',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, libero similique eum accusantium quae veritatis, beatae expedita neque saepe, a quod ex odio quibusdam voluptatem provident laborum suscipit. Quidem, laudantium.',
    icon: 'fa-rocket'
  },
  {
    title: 'Productivity',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, libero similique eum accusantium quae veritatis, beatae expedita neque saepe, a quod ex odio quibusdam voluptatem provident laborum suscipit. Quidem, laudantium.',
    icon: 'fa-thumbs-up'
  },
  {
    title: 'Life Coaching',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, libero similique eum accusantium quae veritatis, beatae expedita neque saepe, a quod ex odio quibusdam voluptatem provident laborum suscipit. Quidem, laudantium.',
    icon: 'fa-gear'
  },
]

const performanceData= [
  {
    value: 3195,
    name: 'Online Learner',
    icon: 'fa-user-group'
  },
  {
    value: 23,
    name: 'Video Courses',
    icon: 'fa-film'
  },
  {
    value: 437,
    name: 'Sliders & Images',
    icon: 'fa-image'
  },
  {
    value: 1440,
    name: 'Excellent Reviews',
    icon: 'fa-thumbs-up'
  },
]

const reviews = [
  {
    image: require('../img/1-100x100.jpg'),
    alt: 'people-1',
    title: 'Paints of the Future',
    vote: 10,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nesciunt, officiis tempora rem inventore atque itaque mollitia omnis fuga in voluptatem possimus minus ad praesentium repellat, repellendus nisi, suscipit laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nesciunt, officiis tempora rem inventore atque itaque mollitia omnis fuga in voluptatem possimus minus ad praesentium repellat, repellendus nisi, suscipit laborum'
  },
  {
    image: require('../img/2-100x100.jpg'),
    alt: 'people-2',
    title: 'Incredible courses',
    vote: 8.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nesciunt, officiis tempora rem inventore atque itaque mollitia omnis fuga in voluptatem possimus minus ad praesentium repellat, repellendus nisi, suscipit laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nesciunt, officiis tempora rem inventore atque itaque mollitia omnis fuga in voluptatem possimus minus ad praesentium repellat, repellendus nisi, suscipit laborum'
  },
  {
    image: require('../img/4-100x100.jpg'),
    alt: 'people-3',
    title: 'I love this course',
    vote: 9,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nesciunt, officiis tempora rem inventore atque itaque mollitia omnis fuga in voluptatem possimus minus ad praesentium repellat, repellendus nisi, suscipit laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nesciunt, officiis tempora rem inventore atque itaque mollitia omnis fuga in voluptatem possimus minus ad praesentium repellat.'
  },
]

export { newCourses, whyCourses, performanceData, reviews }