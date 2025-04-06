import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  
export default function Navbar(){
    return (
        <Menubar>
  <MenubarMenu>
    <MenubarTrigger>Home</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Quick Start</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Features Overview</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>What's New?</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
  <MenubarTrigger>About Us</MenubarTrigger>
    <MenubarContent>
        <MenubarItem>Aim</MenubarItem>
        <MenubarSeparator/>
        <MenubarItem>Our Team</MenubarItem>
        <MenubarSeparator/>
        <MenubarItem>How It Works?</MenubarItem>
        <MenubarSeparator/>
        <MenubarItem>Testimonials</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
  <MenubarTrigger>Settings</MenubarTrigger>
    <MenubarContent>
        <MenubarItem>Profile Settings</MenubarItem>
        {/*Profile Page*/}
        <MenubarSeparator/>
        <MenubarItem>Themes</MenubarItem>
        {/* may include DaisyUI or Light/Dark mode */}
        <MenubarSeparator/>
        <MenubarItem>Language</MenubarItem>
        {/* Hindi ,English*/}
        <MenubarSeparator/>
        <MenubarItem>Accessibility</MenubarItem>
        {/* Font Size , High Contrast*/}
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
  <MenubarTrigger>Sign Up</MenubarTrigger>
    <MenubarContent>
        <MenubarItem>As a User</MenubarItem>
        <MenubarSeparator/>
        <MenubarItem>As a Coach/Mentor</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
  <MenubarTrigger>Login</MenubarTrigger>
    <MenubarContent>
        <MenubarItem>Login with Email</MenubarItem>
        <MenubarSeparator/>
        <MenubarItem>Login with Google</MenubarItem>
        <MenubarSeparator/>
        <MenubarItem>Forgot Password</MenubarItem>
        <MenubarSeparator/>
        <MenubarItem>Testimonials</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
    )
}
