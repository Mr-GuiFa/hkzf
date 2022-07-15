import { Picker, DropdownMenu, DropdownItem, Icon, Tag, Card, Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem, Cell, CellGroup, Search, NavBar, Form, Field, Button, Image as VanImage } from 'vant'
const elements = [Picker, DropdownMenu, DropdownItem, Icon, Tag, Card, Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem, Cell, CellGroup, Search, NavBar, Form, Field, Button, VanImage]
export default function (Vue) {
  elements.forEach((item) => Vue.use(item))
}
