// Components
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon, HomeIcon, PhotoIcon, BellIcon } from "./Icons";

import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import UserNav from "./UserNav";
import SearchNav from "./SearchNav";
// Style Sheets
import "./NavBar.css";

function Navbar({ TogleTheme }) {
  return (
    <nav className="nav flex bg-white px-4 items-center  rounded-xl border-2  m-auto justify-between dark:bg-zinc-900 dark:border-zinc-800 gap-4">
      <div className="flex gap-3 items-center">
          <UserNav
            userName="Bzrp Sessions"
            nickname="Bzrp"
            src="https://www.los40.do/wp-content/uploads/2023/10/16880295953133-e1696339269651-300x300.jpeg"
          />
        <div className="Add-options-nav-bar">
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button variant="bordered">Menu Cook</Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem key="new">Estadisticas</DropdownItem>
              <DropdownItem key="copy">Threads</DropdownItem>
              <DropdownItem key="edit">Compartir Perfil</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                papelera
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div className="flex gap-9 ">
        <HomeIcon className="w-7 stroke-2 stroke-zinc-500 cursor-pointer" />
        <PhotoIcon className="w-12 stroke-2 stroke-white cursor-pointer bg-blue-600 rounded-full p-3" />
        <BellIcon className="w-7 stroke-2 stroke-zinc-500 cursor-pointer" />
      </div>

      <div className="flex gap-2">
        <SearchNav />
        <Switch
          id="SwichTheme"
          defaultSelected
          size="lg"
          color="primary"
          startContent={<SunIcon className="w-4 h-4" />}
          endContent={<MoonIcon className="w-4 h-4" />}
          onClick={TogleTheme}
        ></Switch>
      </div>
    </nav>
  );
}

export default Navbar;
