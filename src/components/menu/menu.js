function Menu() {
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/https://www.facebook.com/profile.php?id=100093962765763',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
                <Image className={cx('user-avatar')} src={ImageHoai} alt="Nguyen Van A" />
            ) : (
                <button className={cx('more-btn')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
            )}
        </Menu>
    );
}

export default Menu;
