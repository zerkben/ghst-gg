import React, { useContext, useEffect } from 'react';

import { ClientContext } from '../../../contexts/ClientContext';
import Citadel from '../../../components/Citadel/Citadel';
import styles from '../styles';

export default function ClientRealmMap() {

    const { realm, setRealmView } = useContext(ClientContext);
    const classes = styles();

    useEffect( () => {
        setRealmView('map');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Citadel className={classes.clientCitadel} ownerParcels={realm} />
    );
}