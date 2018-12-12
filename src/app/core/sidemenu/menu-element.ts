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
        'icon': 'school',
        'link': '/course-enrollment/courses/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
      {
        'name': 'All Lecturers',
        'icon': 'person',
        'link': '/course-enrollment/lecturers/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
      {
        'name': 'All Student',
        'icon': 'person',
        'link': '/course-enrollment/students/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      }
    ]
  }
];
