import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Banner from '../components/banner';
import UpperMain from '../components/upper-main';
import MidMain from '../components/mid-main';
import LowerMain from '../components/lower-main';
import Newsletter from '../components/newsletter';
import { Helmet } from 'react-helmet';

const IndexPage = (props) => (
	<Layout>
		<Helmet title="Home | William D. Hoy" />
		<Nav pathExt={props.path} />
		<Banner />
		<UpperMain />
		<MidMain />
		<LowerMain />
		<Newsletter />
	</Layout>
);

export default IndexPage;

/*
<iframe src="https://drive.google.com/file/d/1g67_4b5xnpfyT7J4drWEpI7QOnPm_UAs/preview" width="640" height="480"></iframe>
<iframe src="https://drive.google.com/file/d/1JCu-vzRM5W1L4aripNIV6hVq8V78UzrB/preview" width="640" height="480"></iframe>
<iframe src="https://drive.google.com/file/d/1LK7gw2KWlNhOFQZMgP-Ou35Qim5pqL_X/preview" width="640" height="480"></iframe>
*/
