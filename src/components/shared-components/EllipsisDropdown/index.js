import React from 'react';
import { Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const EllipsisDropdown = props => {
	return (
		<Dropdown menu={{ items: props.menu }} placement={props.placement} trigger={[props.trigger]}>
			<div className="ellipsis-dropdown">
				<EllipsisOutlined />
			</div>
		</Dropdown>
	);
};

EllipsisDropdown.propTypes = {
	trigger: PropTypes.string,
	placement: PropTypes.string,
	menu: PropTypes.array // menu sekarang berupa array of objects
};

EllipsisDropdown.defaultProps = {
	trigger: 'click',
	placement: 'bottomRight',
	menu: <Menu/>
};

export default EllipsisDropdown
