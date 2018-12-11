export const menus = [
  {
    'name': 'Dashboard',
    'icon': 'dashboard',
    'link': '/dashboard',
    'open': false,
    'chip': {'value': 1, 'color': 'accent'},
  },
  {
    'name': 'Enrollment',
    'icon': 'list',
    'link': false,
    'open': false,
    'chip': false,
    'sub': [
      {
        'name': 'All Courses',
        'icon': 'filter_list',
        'link': '/course-enrollment/courses/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
    ]
  }
];
