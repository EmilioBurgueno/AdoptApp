import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {path: 'profile',
        children: [
          {path: '', loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)},
          {path: 'active', loadChildren: () => import('./modals/active-submissions/active-submissions.module').then( m => m.ActiveSubmissionsPageModule)}
        ]
      },
      {path: 'feed',
        children: [
          {path: '', loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)},
        ]
      },
      {path: 'create-dog-profile',
        children: [
          {path: '',loadChildren: () => import('./create-dog-profile/create-dog-profile.module').then( m => m.CreateDogProfilePageModule)}
        ]
      },
      {path: 'settings', 
        children: [ 
          {path: '',loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)},
          {path: 'editprofile',loadChildren: () => import('./settingssub/editprofile/editprofile.module').then( m => m.EditprofilePageModule)},
          {path: 'seeprofile', loadChildren: ()=> import('./settingssub/seeprofile/seeprofile.module').then(m => m.SeeprofilePageModule)},
          {path: 'changepass', loadChildren: ()=> import('./settingssub/changepass/changepass.module').then(m => m.ChangepassPageModule)},
          {path: 'logout', loadChildren: ()=> import('./settingssub/logout/logout.module').then(m => m.LogoutPageModule)}
        ]
    },
      {path: '',redirectTo: '/tabs/profile',pathMatch: 'full'}
    ]
  },
  {path: '', redirectTo: '/tabs/profile', pathMatch: 'full'},
  {path: 'dogprofile/:dogId', loadChildren: () => import('./modals/dog-profile/dog-profile.module').then( m => m.DogProfilePageModule)},
  {
    path: 'seeprofile',
    loadChildren: () => import('./settingssub/seeprofile/seeprofile.module').then( m => m.SeeprofilePageModule)
  },
  {
    path: 'changepass',
    loadChildren: () => import('./settingssub/changepass/changepass.module').then( m => m.ChangepassPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./settingssub/logout/logout.module').then( m => m.LogoutPageModule)
  },



  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
