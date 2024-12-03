import { PieChartOutlined 
  , DatabaseOutlined
  , SnippetsOutlined
  , ApiOutlined
  , ControlOutlined
  , BorderlessTableOutlined
  , ApartmentOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: PieChartOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: PieChartOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

//Project Data
const maindNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/apps/project`,
  title: 'sidenav.general.data',
  icon: PieChartOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'project-data',
      path: `${APP_PREFIX_PATH}/apps/project/project-list`,
      title: 'sidenav.project.data',
      icon:  DatabaseOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'comm-deff-data',
      path: `${APP_PREFIX_PATH}/apps/general-input/comm-deff/comm-deff-list`,
      title: 'sidenav.sheet.comm.deff',
      icon:  DatabaseOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-subsystem-data',
      path: `${APP_PREFIX_PATH}/apps/general-input/systemsub-drawing/systemsub-drawing-list`,
      title: 'sidenav.sheet.comm.drawing',
      icon:  DatabaseOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]


// Cons Completion
const consCompletionNavTree = [{
  key: 'cons-completion',
  path: `${APP_PREFIX_PATH}/apps/cons-completion`,
  title: 'sidenav.cons.completion',
  icon: PieChartOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'cc-data',
      path: `${APP_PREFIX_PATH}/apps/project`,
      title: 'sidenav.cons.docs.cc.checksheet',
      icon:  SnippetsOutlined ,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const preCommNavTree = [{
  key: 'pre-comm',
  path: `${APP_PREFIX_PATH}/apps/pre-comm`,
  title: 'sidenav.pre.comm',
  icon: PieChartOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'pre-com-data',
      path: `${APP_PREFIX_PATH}/apps/pre-comm`,
      title: 'sidenav.pre.comm.pc',
      icon:  SnippetsOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

// Comm Data 
const commNavTree = [{
  key: 'comm',
  path: `${APP_PREFIX_PATH}/apps/pre-comm`,
  title: 'sidenav.comm',
  icon: PieChartOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'commm.data',
      path: `${APP_PREFIX_PATH}/apps/pre-comm`,
      title: 'sidenav.comm.data',
      icon:  DatabaseOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]


// Input Option 
const inputOptionNavTree = [{
  key: 'input-option',
  path: `${APP_PREFIX_PATH}/apps/option`,
  title: 'sidenav.general.input.option',
  icon: ApiOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'input-option-general-input',
      path: `${APP_PREFIX_PATH}/apps/option`,
      title: 'sidenav.general.input',
      icon:  ControlOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'input-option-project-type',
          path: `${APP_PREFIX_PATH}/apps/option/project-type/project-type-list`,
          title: 'sidenav.general.project.type',
          icon:  ApiOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'input-option-project-divisi',
          path: `${APP_PREFIX_PATH}/apps/option/project-divisi/project-divisi-list`,
          title: 'sidenav.general.project.divisi',
          icon:  BorderlessTableOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'input-option-dicipline-knowledge',
          path: `${APP_PREFIX_PATH}/apps/option/dicipline/dicipline-list`,
          title: 'sidenav.dicipline.knowledge',
          icon:  ApartmentOutlined,
          breadcrumb: false,
          submenu: []
        }
      ]
    }
  ]
}]


const navigationConfig = [
  ...dashBoardNavTree
  , ...maindNavTree
  , ...consCompletionNavTree
  , ...preCommNavTree
  , ...commNavTree
  , ...inputOptionNavTree
]

export default navigationConfig;
