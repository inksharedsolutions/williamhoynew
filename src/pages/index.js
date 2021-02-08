import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Banner from '../components/banner';
import UpperMain from '../components/upper-main';
import MidMain from '../components/mid-main';
import LowerMain from '../components/lower-main';
import Newsletter from '../components/newsletter';

const IndexPage = (props) => (
	<Layout>
		<Nav pathExt={props.path} />
		<Banner />
		<UpperMain />
		<MidMain />
		<LowerMain />
		<Newsletter />
	</Layout>
);

export default IndexPage;
