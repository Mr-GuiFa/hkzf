import { Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem, Cell, CellGroup, Search, NavBar, Form, Field, Button, Image as VanImage } from 'vant'
const elements = [Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem, Cell, CellGroup, Search, NavBar, Form, Field, Button, VanImage]
export default function (Vue) {
  elements.forEach((item) => Vue.use(item))
}
