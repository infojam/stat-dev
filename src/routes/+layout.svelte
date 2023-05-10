<script>
    import "carbon-components-svelte/css/white.css";
    import {navigation} from '../stores/stores.js'
    //import "carbon-components-svelte/css/g10.css";
     import {
         Header,
         HeaderNav,
         HeaderNavItem,
         HeaderNavMenu,
        HeaderUtilities,
        HeaderAction,
        HeaderGlobalAction,
        HeaderPanelLinks,
        HeaderPanelDivider,
        HeaderPanelLink,
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavMenuItem,
        SideNavLink,
        SkipToContent,
        Content,
        Grid,
        Row,
        Column,
      } from "carbon-components-svelte";
    
     import SettingsAdjust from "carbon-icons-svelte/lib/SettingsAdjust.svelte";
      import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
    
      let isSideNavOpen = navigation.isOpen;
      let isOpen1 = false;
      let isOpen2 = false;
    
    </script>
    
    <main>
    <Header
      persistentHamburgerMenu={true}
      company="INFOJAM"
      platformName="STAT"
      bind:isSideNavOpen
    >
      <svelte:fragment slot="skip-to-content">
        <SkipToContent />
      </svelte:fragment>
      <HeaderUtilities>
        <HeaderGlobalAction aria-label="Settings" icon={SettingsAdjust} />
        <HeaderAction
          bind:isOpen={isOpen1}
          icon={UserAvatarFilledAlt}
          closeIcon={UserAvatarFilledAlt}
        >
          <HeaderPanelLinks>
            <HeaderPanelDivider>Switcher subject x</HeaderPanelDivider>
            <HeaderPanelLink><a href="/notes/">c</a></HeaderPanelLink>
            <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 4</HeaderPanelLink>
            <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
            <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
            <HeaderPanelDivider>Switcher subject 3</HeaderPanelDivider>
            <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
          </HeaderPanelLinks>
        </HeaderAction>
        <HeaderAction bind:isOpen={isOpen2}>
          <HeaderPanelLinks>
            <HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
            <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
            <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
            <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 4</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 5</HeaderPanelLink>
          </HeaderPanelLinks>
        </HeaderAction>
      </HeaderUtilities>
      <!-- <HeaderNav>
        <HeaderNavItem href="/" text="Link 1" />
        <HeaderNavItem href="/" text="Link 2" />
        <HeaderNavItem href="/" text="Link 3" />
        <HeaderNavMenu text="Menu">
          <HeaderNavItem href="/" text="Link 1" />
          <HeaderNavItem href="/" text="Link 2" />
          <HeaderNavItem href="/" text="Link 3" />
        </HeaderNavMenu>
      </HeaderNav> -->
    </Header>
    
    <SideNav style="background-color: #262626;" bind:isOpen={isSideNavOpen}>
      <SideNavItems>
        <div style="border-left: 4px solid #0D62FE;background-color: #393939;padding-top: 12px;padding-bottom:12px;padding-left:12px;background-color: #393939;color:white;"><strong> <div style="padding-bottom: 5px;">City of York Council</div></strong>{navigation.nav[0].name}</div>
        <SideNavLink text="Link 2" />
        <SideNavLink text="Link 3" />
        <SideNavMenu text="Reports">
          <SideNavMenuItem href="/" text="Activity" />
          <SideNavMenuItem href="/" text="Usage" />
          <SideNavMenuItem href="/" text="Data" />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
    
    <Content>
    <slot />
    
    </Content>
        
    </main>
    