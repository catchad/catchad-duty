import imageLink1 from '../images/employees/1.jpg';
import imageLink2 from '../images/employees/2.jpg';
import imageLink3 from '../images/employees/3.jpg';
import imageLink4 from '../images/employees/4.jpg';
import imageLink5 from '../images/employees/5.jpg';
import imageLink6 from '../images/employees/6.jpg';
import imageLink8 from '../images/employees/8.jpg';
import imageLink9 from '../images/employees/9.jpg';
import imageLink10 from '../images/employees/10.jpg';
import imageLink11 from '../images/employees/11.jpg';
import imageLink12 from '../images/employees/12.jpg';
import imageLink13 from '../images/employees/13.jpg';
import imageLink14 from '../images/employees/14.jpg';
import imageLink15 from '../images/employees/15.jpg';
import imageLink16 from '../images/employees/16.jpg';
import imageLink18 from '../images/employees/18.jpg';
import groupBy from 'lodash/groupBy';

const Groups = {
  programming: 'programming',
  movie: 'movie',
  pm: 'pm',
  design: 'design',
  creative: 'creative',
  threeD: 'threeD',
  boss: 'boss'
};

const employees = [
  { name: '智永 ：)', group: Groups.programming, imageLink: imageLink1 },
  { name: '彭語箴', group: Groups.movie, imageLink: imageLink2 },
  { name: '郭', group: Groups.design, imageLink: imageLink3 },
  { name: '維晉', group: Groups.programming, imageLink: imageLink4 },
  { name: '蔡貴翰', group: Groups.programming, imageLink: imageLink5 },
  { name: '凱西尤尤', group: Groups.movie, imageLink: imageLink6 },
  { name: '張小綱', group: Groups.movie, imageLink: imageLink8 },
  { name: '張文瀚', group: Groups.programming, imageLink: imageLink9 },
  { name: 'Diane Lu', group: Groups.creative, imageLink: imageLink10 },
  { name: '陳妏伊', group: Groups.pm, imageLink: imageLink11 },
  { name: '黃植琨', group: Groups.programming, imageLink: imageLink12 },
  { name: '莊跟萄', group: Groups.boss, imageLink: imageLink13 },
  {
    name: 'Jerry Chen',
    imageLink: imageLink14,
    group: Groups.threeD
  },
  { name: '許小柔', imageLink: imageLink15, group: Groups.pm },
  { name: 'Elsa', imageLink: imageLink16, group: Groups.pm },
  { name: 'JessinLin', imageLink: imageLink18, group: Groups.design }
];

const employeesByGroup = groupBy(employees, 'group');

export default employees;
export { employeesByGroup, Groups };
