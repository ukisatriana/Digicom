import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },



    // Route Project Data
    {
        key: 'project.data',
        path: `${APP_PREFIX_PATH}/apps/project/project-list`,
        component: React.lazy(() => import('views/app-views/apps/project/project-list')),
    },
    {
        key: 'project.data.add',
        path: `${APP_PREFIX_PATH}/apps/project/project-add`,
        component: React.lazy(() => import('views/app-views/apps/project/project-add')),
    },
    {
        key: 'project.data.edit',
        path: `${APP_PREFIX_PATH}/apps/project/project-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/project/project-edit')),
    },

    // Comm Deff
    {
        key: 'comm.deff.data',
        path: `${APP_PREFIX_PATH}/apps/general-input/comm-deff/comm-deff-list`,
        component: React.lazy(() => import('views/app-views/apps/general-input/comm-deff/comm-deff-list')),
    },
    {
        key: 'comm.deff.data.add',
        path: `${APP_PREFIX_PATH}/apps/general-input/comm-deff/comm-deff-add`,
        component: React.lazy(() => import('views/app-views/apps/general-input/comm-deff/comm-deff-add')),
    },
    {
        key: 'comm.deff.data.edit',
        path: `${APP_PREFIX_PATH}/apps/general-input/comm-deff/comm-deff-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/general-input/comm-deff/comm-deff-edit')),
    },

    // Comm System/Subsystem
    {
        key: 'comm.system.subsystem.data',
        path: `${APP_PREFIX_PATH}/apps/general-input/systemsub-drawing/systemsub-drawing-list`,
        component: React.lazy(() => import('views/app-views/apps/general-input/systemsub-drawing/systemsub-drawing-list')),
    },
    {
        key: 'comm.system.subsystem.data.add',
        path: `${APP_PREFIX_PATH}/apps/general-input/systemsub-drawing/systemsub-drawing-add`,
        component: React.lazy(() => import('views/app-views/apps/general-input/systemsub-drawing/systemsub-drawing-add')),
    },
    // {
    //     key: 'comm.system.subsystem.data',
    //     path: `${APP_PREFIX_PATH}/apps/general-input/systemsub-drawing/systemsub-drawing-list-detail`,
    //     component: React.lazy(() => import('views/app-views/apps/general-input/systemsub-drawing/systemsub-drawing-list-detail')),
    // },
    

    // Summ System/Subsystem

    {
        key: 'comm.system.subsystem.data',
        path: `${APP_PREFIX_PATH}/apps/summ-data/summ-syssub/summ-syssub-list`,
        component: React.lazy(() => import('views/app-views/apps/summ-data/summ-syssub/summ-syssub-list')),
    },
    {
        key: 'comm.system.subsystem.data.add',
        path: `${APP_PREFIX_PATH}/apps/summ-data/summ-syssub/summ-syssub-add`,
        component: React.lazy(() => import('views/app-views/apps/summ-data/summ-syssub/summ-syssub-add')),
    },
    {
        key: 'comm.system.subsystem.data.edit',
        path: `${APP_PREFIX_PATH}/apps/summ-data/summ-syssub/summ-syssub-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/summ-data/summ-syssub/summ-syssub-edit')),
    },
    // {
    //     key: 'comm.system.subsystem.data.detail',
    //     path: `${APP_PREFIX_PATH}/apps/summ-data/summ-syssub/summ-syssub-edit/:id`,
    //     component: React.lazy(() => import('views/app-views/apps/summ-data/summ-syssub/summ-syssub-edit')),
    // },

    // identity

    {
        key: 'comm.acitvity.list',
        path: `${APP_PREFIX_PATH}/apps/ident-activity/ident-activity-list`,
        component: React.lazy(() => import('views/app-views/apps/ident-activity/ident-activity-list')),
    },
    {
        key: 'comm.acitvity.list.add',
        path: `${APP_PREFIX_PATH}/apps/ident-activity/ident-activity-add`,
        component: React.lazy(() => import('views/app-views/apps/ident-activity/ident-activity-add')),
    },
    {
        key: 'comm.acitvity.list.edit',
        path: `${APP_PREFIX_PATH}/apps/ident-activity/ident-activity-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/ident-activity/ident-activity-edit')),
    },


    // Route Project Type
    {
        key: 'project.data.type',
        path: `${APP_PREFIX_PATH}/apps/option/project-type/project-type-list`,
        component: React.lazy(() => import('views/app-views/apps/option/project-type/project-type-list')),
    },
    {
        key: 'project.data.type.add',
        path: `${APP_PREFIX_PATH}/apps/option/project-type/project-type-add`,
        component: React.lazy(() => import('views/app-views/apps/option/project-type/project-type-add')),
    },
    {
        key: 'project.data.type.edit',
        path: `${APP_PREFIX_PATH}/apps/option/project-type/project-type-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/option/project-type/project-type-edit')),
    },
    
    // Route Project Divisi
    {
        key: 'project.data.divisi',
        path: `${APP_PREFIX_PATH}/apps/option/project-divisi/project-divisi-list`,
        component: React.lazy(() => import('views/app-views/apps/option/project-divisi/project-divisi-list')),
    },
    {
        key: 'project.data.divisi.add',
        path: `${APP_PREFIX_PATH}/apps/option/project-divisi/project-divisi-add`,
        component: React.lazy(() => import('views/app-views/apps/option/project-divisi/project-divisi-add')),
    },
    {
        key: 'project.data.type.edit',
        path: `${APP_PREFIX_PATH}/apps/option/project-divisi/project-divisi-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/option/project-divisi/project-divisi-edit')),
    },

    // Route Project Option Dicipline
    {
        key: 'project.data.dicipline',
        path: `${APP_PREFIX_PATH}/apps/option/dicipline/dicipline-list`,
        component: React.lazy(() => import('views/app-views/apps/option/dicipline/dicipline-list')),
    },
    {
        key: 'project.data.dicipline.add',
        path: `${APP_PREFIX_PATH}/apps/option/dicipline/dicipline-add`,
        component: React.lazy(() => import('views/app-views/apps/option/dicipline/dicipline-add')),
    },
    {
        key: 'project.data.dicipline.edit',
        path: `${APP_PREFIX_PATH}/apps/option/dicipline/dicipline-edit/:id`,
        component: React.lazy(() => import('views/app-views/apps/option/dicipline/dicipline-edit')),
    },


    
]