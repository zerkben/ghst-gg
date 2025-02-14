
import classNames from 'classnames';
import React from 'react';

import ParcelGeneric from '../../../components/Items/Parcel/ParcelGeneric';
import RealmGeneric from '../../../components/Items/Parcel/RealmGeneric';
import PortalGeneric from '../../../components/Items/Portal/PortalGeneric';
import Wearable from '../../../components/Items/Wearable/Wearable';

import { itemsStyles } from '../styles';

export default function RaffleItems({tickets, type}) {
    const classes = itemsStyles();

    const renderItem = (item) => {
        switch(type) {
            case 'realm-generic':
                return <RealmGeneric
                    realm={{
                        size: item.id,
                        balance: item.quantity
                    }}
                    raffleChances={{
                        chance: item.chance,
                        won: item.won,
                        quantity:item.quantity
                    }}
                ></RealmGeneric>
            case 'realm':
                return <ParcelGeneric
                    parcel={{
                        size: item.id,
                        balance: item.quantity
                    }}
                    raffleChances={{
                        chance: item.chance,
                        won: item.won,
                        quantity:item.quantity
                    }}
                ></ParcelGeneric>
            case 'portals':
                return <PortalGeneric
                    portal={{
                        id: item.id,
                        balance: item.quantity
                    }}
                    raffleChances={{
                        chance: item.chance,
                        won: item.won,
                        quantity:item.quantity
                    }}
                ></PortalGeneric>
            case 'wearables':
                return <Wearable
                    wearable={{
                        id: item.id,
                        balance: item.quantity,
                        category: 0
                    }}
                    raffleChances={{
                        chance: item.chance,
                        won: item.won,
                        quantity:item.quantity
                    }}
                ></Wearable>
            default:
                return null;
        }
    };
    
    return (
        <div className={classes.list}>
            {
                tickets.slice(0).reverse().map((ticket) => {

                    if(ticket.prizes) return ticket.prizes.map((item, i) => {
                        let clean = tickets.some(t => t['value'] !== '');

                        return <div
                            className={classNames(classes.listItem, item.chance && 'highlight', !clean && 'clean', )}
                            key={i}
                        >
                            {renderItem(item)}
                        </div>
                    })
                    return null;
                })
            }
        </div>
    );
}