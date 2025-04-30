import megaStyles from '../../styles/megastyles.module.css';

import PrettyPrint from '../PrettyPrint.jsx';

import React, { useEffect, useRef, useState } from 'react';

const MegaMenu = ({ navLinks, logoSettings, mainButtonSettings, brandColor }) => {
  const headerRef = useRef(null);
  const menuContainerRef = useRef(null);
  const burgerTogglerRef = useRef(null);
  const searchTabRef = useRef(null);
  const searchInputRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const body = document.body;
    const html = document.documentElement;
    const footer = document.querySelector('footer'); // Be mindful of this, might need context

    if (!header || !footer || !menuContainerRef.current) {
      console.error("Header, footer, or menu container element not found.");
      return;
    }

    const menuContainer = menuContainerRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const windowHeight = window.innerHeight;
      const footerHeight = footer.offsetHeight;
      const pinEnd = documentHeight - footerHeight;

      // Pinning Logic
      if (scrollY >= 0 && scrollY < pinEnd) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.left = '0';
        header.style.width = '100%';
        header.style.zIndex = '100';
      } else if (scrollY >= pinEnd) {
        header.style.position = 'absolute';
        header.style.top = pinEnd + 'px';
        header.style.left = '0';
        header.style.width = '100%';
      } else {
        header.style.position = '';
        header.style.top = '';
        header.style.left = '';
        header.style.width = '';
        header.style.zIndex = '';
      }

      // Toggle "active" class Logic
      if (scrollY > 300) {
        header.classList.add(megaStyles.active);
      } else {
        header.classList.remove(megaStyles.active);
      }

      // Contain Menu Overflow
      const headerBottom = header.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      if (headerBottom > viewportHeight) {
        menuContainer.style.maxHeight = `${viewportHeight - header.offsetHeight}px`;
        menuContainer.style.overflowY = 'auto';
      } else {
        menuContainer.style.maxHeight = '';
        menuContainer.style.overflowY = '';
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    if (searchTabRef.current) {
      searchTabRef.current.classList.add(megaStyles.open);
    }
  };

  const closeAllDropdowns = (currentIndex) => {
    const dropdowns = document.querySelectorAll(`.${megaStyles.dropdown}`);
    const mainDropdownTogglers = document.querySelectorAll(`.${megaStyles['main-dropdown']}`);
    dropdowns.forEach((dropdown, index) => {
      if (index !== currentIndex && dropdown.style.maxHeight !== '0px') {
        dropdown.style.maxHeight = '0px';
        if (mainDropdownTogglers[index]) {
          mainDropdownTogglers[index].classList.remove(megaStyles.open);
        }
      }
    });
  };

  const toggleDropdown = (index) => {
    const dropdowns = document.querySelectorAll(`.${megaStyles.dropdown}`);
    const mainDropdownItems = document.querySelectorAll(`.${megaStyles['main-dropdown']}`);
    const currentDropdown = dropdowns[index];

    closeAllDropdowns(index);

    if (currentDropdown) {
      currentDropdown.style.maxHeight = currentDropdown.style.maxHeight === '0px' || !currentDropdown.style.maxHeight ? 'inherit' : '0px';
      mainDropdownItems[index]?.classList.toggle(megaStyles.open);
    }
  };

  return (
    <header id="main-navigation" className={`${megaStyles['main-navigation']} ${megaStyles.dark} ${isMenuOpen ? megaStyles.open : ''}`} ref={headerRef}>
      <div className={megaStyles.container}>
        {logoSettings?.logo_link?.url?.href ? (
          <a href={logoSettings.logo_link.url.href} className={megaStyles['logo-wrapper']}>
            <img
              src={logoSettings.logo_image?.src}
              width={logoSettings.logo_image?.width}
              height={logoSettings.logo_image?.height}
              alt={logoSettings.logo_image?.alt}
            />
          </a>
        ) : (
          <figure className={megaStyles['logo-wrapper']}>
            <img
              src={logoSettings?.logo_image?.src}
              width={logoSettings?.logo_image?.width}
              height={logoSettings?.logo_image?.height}
              alt={logoSettings?.logo_image?.alt}
            />
          </figure>
        )}
        <ul className={megaStyles['navigation-mainlist']} id="navigation-mainlist" ref={menuContainerRef}>
          {navLinks && navLinks.map((item, index) => (
            <li key={item.id} className={`${megaStyles['main-item']} ${item.main_item_type === 'link' ? megaStyles['main-link'] : megaStyles['main-dropdown']}`}>
              {item.main_item_type === 'link' ? (
                <a className={megaStyles['main-link-content']} href={item.main_item_link?.url?.href}>
                  {item.main_item_label}
                </a>
              ) : (
                <>
                  <p className={megaStyles['main-dropdown-label']} onClick={() => toggleDropdown(index)}>
                    {item.main_item_label}
                  </p>
                  <div className={megaStyles.dropdown}>
                    <div className={megaStyles.container}>
                      {/* Left Dropdown Part */}
                      <div className={megaStyles.left}>
  {item.dropdown_settings?.left_column?.left_title && (
   <p className={megaStyles['left-title']}>
    {item.dropdown_settings.left_column.left_title}
   </p>
  )}
  {item.dropdown_settings?.left_column?.left_content && (
   <p className={megaStyles['left-description']}>
    {item.dropdown_settings.left_column.left_content}
   </p>
  )}
  {item.dropdown_settings?.left_column?.left_cta_link?.url?.href && (
   <a
    href={item.dropdown_settings.left_column.left_cta_link.url.href}
    className={`${megaStyles.btn} ${megaStyles.tertiary} ${megaStyles.light}`}
   >
    <span>{item.dropdown_settings.left_column.left_cta_label}</span>
   </a>
  )}
 </div>

                      {/* Main Dropdown Part - Start */}
                      <div className={`${megaStyles.middle} ${item.dropdown_settings?.main_column?.main_column_type === 'regular' ? megaStyles.regular : ''}`}>
                       {item.dropdown_settings?.main_column?.sub_links && item.dropdown_settings.main_column.sub_links.map((subItem) => (
                          <a
                            key={subItem.id}
                            aria-label={subItem.sub_title}
                            href={subItem.sub_link?.url?.href}
                            target={subItem.sub_link?.open_in_new_tab ? '_blank' : undefined}
                            className={`${megaStyles['sub-item']} ${item.dropdown_settings?.main_column?.main_column_type === 'regular' ? megaStyles.regular : ''}`}
                          >
                            <figure>
                              <img
                                src={subItem.sub_picto?.src}
                                width={subItem.sub_picto?.width}
                                height={subItem.sub_picto?.height}
                                alt={`${subItem.sub_picto?.alt} Icon`}
                              />
                            </figure>
                            <div>
                              <p className={megaStyles['sub-title']}>{subItem.sub_title}</p>
                              {item.dropdown_settings?.main_column?.main_column_type === 'descriptive' && (
                                <p className={megaStyles['sub-description']}>{subItem.sub_description}</p>
                              )}
                            </div>
                          </a>
                        ))}
                         
                      </div>
                      {/* Main Dropdown Part - End */}

                      {/* Right Dropdown Part - Start */}
                      {!item.dropdown_settings?.right_column?.hidden && (
                        <div className={`${megaStyles.right} ${item.dropdown_settings?.right_column?.borderless ? megaStyles.borderless : ''}`}>
                          <div
                            className={megaStyles['right-content']}
                            dangerouslySetInnerHTML={{ __html: item.dropdown_settings?.right_column?.right_content }}
                          />
                          <ul className={megaStyles['right-list']}>
                            {item.dropdown_settings?.right_column?.right_list && item.dropdown.right.right_list.map((rightItem) => (
                              <li key={rightItem.id} className={megaStyles['right-list-item']}>
                                <a
                                  href={rightItem.item_link?.url?.href}
                                  target={rightItem.item_link?.open_in_new_tab ? '_blank' : undefined}
                                >
                                  {rightItem.list_item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Right Dropdown Part - End */}
                     </div>
                  </div>
                </>
              )}
            </li>
          ))}
          {mainButtonSettings?.main_button_label && (
            <li className={megaStyles['contain-btn']}>
              <a
                id="main-cta-responsive"
                className={`${megaStyles.btn} ${megaStyles['main-nav-cta']} ${megaStyles.dark}`}
                href={mainButtonSettings.main_button_link?.url?.href}
                target={mainButtonSettings.main_button_link?.open_in_new_tab ? '_blank' : undefined}
              >
                <span>{mainButtonSettings.main_button_label}</span>
              </a>
            </li>
          )}
        </ul>
        <div className={megaStyles['navigation-search-tab']} id="navigation-search-tab" ref={searchTabRef}>
          <form id="searchForm" action="/{{ site_settings.content_search_results_page_path }}" data-form-type="">
            <input type="hidden" name="type" value="BLOG_POST" />
            <input type="hidden" name="type" value="SITE_PAGE" />
            <input
              className={`${megaStyles['form-control']} ${megaStyles['form-control-sm']} ${megaStyles['form-control-classic']} ${megaStyles['search-input']}`}
              type="text"
              placeholder="Search..."
              aria-label="Search"
              name="term"
              autoComplete="off"
              id="form-control"
              data-form-type=""
              ref={searchInputRef}
            />
            <input type="submit" className={megaStyles['search-icon']} id="navigation-search-icon" onClick={handleSearchClick} />
          </form>
        </div>
        {/* Language Switcher - Placeholder for React Implementation */}
        <div className={megaStyles.language} className={megaStyles['lang-traduct']}>
          {/* Replace with your React Language Switcher component/logic */}
          {/* {% language_switcher "language_switcher" %} */}
          {/* For now, a simple text placeholder: */}
          Language Switcher
        </div>
        {mainButtonSettings?.main_button_label && (
          <a
            id="main-cta"
            className={`${megaStyles.btn} ${megaStyles['main-nav-cta']} ${megaStyles.white}`}
            href={mainButtonSettings.main_button_link?.url?.href}
            target={mainButtonSettings.main_button_link?.open_in_new_tab ? '_blank' : undefined}
          >
            <span>{mainButtonSettings.main_button_label}</span>
          </a>
        )}
        <div className={megaStyles['burger-toggler']} id="responsive-navigation-toggler" ref={burgerTogglerRef} onClick={toggleMenu}>
          {/* Burger icon can be added here with CSS */}
        </div>
      </div>
    </header>
  );
};

export default MegaMenu;