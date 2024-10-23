import { Injectable } from '@angular/core';

export interface Customer {
    ID: number;
    CompanyName: string;
    Address: string;
    City: string;
    State: string;
    Zipcode: number;
    Phone: string;
    Fax: string;
}

export type PlanningNotification = 'New Proposal' | 'New Contract' | 'Lost' | 'Replanning';
export type PlanningType = 'Proposal' | 'Contract';
export interface PlanningData {
    id?: number;
    type: PlanningType;
    notification: PlanningNotification;
    name: string;
    startDate: string;
    endDate: string;
    planningStatus: string;
    actions: string;
    requiresAction?: boolean;
}

const customers: Customer[] = [{
    ID: 1,
    CompanyName: 'Super Mart of the West',
    Address: '702 SW 8th Street',
    City: 'Bentonville',
    State: 'Arkansas',
    Zipcode: 72716,
    Phone: '(800) 555-2797',
    Fax: '(800) 555-2171',
}, {
    ID: 2,
    CompanyName: 'Electronics Depot',
    Address: '2455 Paces Ferry Road NW',
    City: 'Atlanta',
    State: 'Georgia',
    Zipcode: 30339,
    Phone: '(800) 595-3232',
    Fax: '(800) 595-3231',
}, {
    ID: 3,
    CompanyName: 'K&S Music',
    Address: '1000 Nicllet Mall',
    City: 'Minneapolis',
    State: 'Minnesota',
    Zipcode: 55403,
    Phone: '(612) 304-6073',
    Fax: '(612) 304-6074',
}, {
    ID: 4,
    CompanyName: "Tom's Club",
    Address: '999 Lake Drive',
    City: 'Issaquah',
    State: 'Washington',
    Zipcode: 98027,
    Phone: '(800) 955-2292',
    Fax: '(800) 955-2293',
}, {
    ID: 5,
    CompanyName: 'E-Mart',
    Address: '3333 Beverly Rd',
    City: 'Hoffman Estates',
    State: 'Illinois',
    Zipcode: 60179,
    Phone: '(847) 286-2500',
    Fax: '(847) 286-2501',
}, {
    ID: 6,
    CompanyName: 'Walters',
    Address: '200 Wilmot Rd',
    City: 'Deerfield',
    State: 'Illinois',
    Zipcode: 60015,
    Phone: '(847) 940-2500',
    Fax: '(847) 940-2501',
}, {
    ID: 7,
    CompanyName: 'StereoShack',
    Address: '400 Commerce S',
    City: 'Fort Worth',
    State: 'Texas',
    Zipcode: 76102,
    Phone: '(817) 820-0741',
    Fax: '(817) 820-0742',
}, {
    ID: 8,
    CompanyName: 'Circuit Town',
    Address: '2200 Kensington Court',
    City: 'Oak Brook',
    State: 'Illinois',
    Zipcode: 60523,
    Phone: '(800) 955-2929',
    Fax: '(800) 955-9392',
}, {
    ID: 9,
    CompanyName: 'Premier Buy',
    Address: '7601 Penn Avenue South',
    City: 'Richfield',
    State: 'Minnesota',
    Zipcode: 55423,
    Phone: '(612) 291-1000',
    Fax: '(612) 291-2001',
}, {
    ID: 10,
    CompanyName: 'ElectrixMax',
    Address: '263 Shuman Blvd',
    City: 'Naperville',
    State: 'Illinois',
    Zipcode: 60563,
    Phone: '(630) 438-7800',
    Fax: '(630) 438-7801',
}];

const MOCK_PLANNING_DATA: PlanningData[] = [
    {
        type: "Proposal",
        notification: "New Proposal",
        name: "Proposal 1",
        startDate: "01/01/2025",
        endDate: "01/04/2025",
        planningStatus: "160/170",
        actions: "Report",
        requiresAction: true
    },
    {
        type: "Contract",
        notification: "New Contract",
        name: "Contract 2",
        startDate: "10/05/2024",
        endDate: "10/08/2025",
        planningStatus: "0/400",
        actions: "Report",
        requiresAction: true
    },
    {
        type: "Proposal",
        notification: "Replanning",
        name: "Proposal 3",
        startDate: "18/05/2025",
        endDate: "16/06/2025",
        planningStatus: "350/300",
        actions: "Report",
        requiresAction: true
    },
    {
        type: "Contract",
        notification: "Replanning",
        name: "Contract 4",
        startDate: "18/12/2025",
        endDate: "18/12/2026",
        planningStatus: "120/230",
        actions: "Report",
        requiresAction: true
    },
    {
        type: "Proposal",
        notification: "Lost",
        name: "Proposal 5",
        startDate: "18/05/2025",
        endDate: "01/11/2026",
        planningStatus: "0/0",
        actions: "Report"
    },
    {
        type: "Proposal",
        notification: "Replanning",
        name: "Proposal 6",
        startDate: "16/06/2025",
        endDate: "16/06/2025",
        planningStatus: "350/300",
        actions: "Report"
    },
    {
        type: "Contract",
        notification: "Replanning",
        name: "Contract 7",
        startDate: "18/05/2024",
        endDate: "19/06/2025",
        planningStatus: "330/330",
        actions: "Accept"
    },
    {
        type: "Contract",
        notification: "Replanning",
        name: "Contract 7",
        startDate: "18/05/2024",
        endDate: "19/06/2025",
        planningStatus: "190/190",
        actions: "Modify"
    },
    {
        type: "Proposal",
        notification: "Replanning",
        name: "Proposal 7",
        startDate: "28/10/2024",
        endDate: "22/07/2025",
        planningStatus: "110/110",
        actions: "Modify"
    },
    {
        type: "Proposal",
        notification: "Replanning",
        name: "Proposal 8",
        startDate: "08/02/2024",
        endDate: "11/02/2026",
        planningStatus: "80/80",
        actions: "Report"
    }
];

export class List {
    id: number = 0;
    text: string = "";
    icon: string = "";
    path: string = ""
}

const navigation: List[] = [
    { id: 1, text: 'Homepage - Agenda', icon: 'home', path: 'home' },
    { id: 2, text: 'Manage by Proposal', icon: 'taskhelpneeded', path: 'proposal' },
    { id: 3, text: 'Manage by Contract', icon: 'taskcomplete', path: 'contract' },
    { id: 4, text: 'Manage by Personnel', icon: 'group', path: 'personnel' },
];

const text = `
<h2>
    <b>Drawer Demo</b>
</h2>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet purus gravida quis blandit. Auctor urna nunc id cursus metus aliquam eleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida. Nullam vehicula ipsum a arcu. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui id ornare arcu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p><p>Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Neque volutpat ac tincidunt vitae semper quis lectus. Sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet justo donec enim. Vestibulum rhoncus est pellentesque elit ullamcorper. Id aliquet risus feugiat in ante metus dictum at.
</p>
`;

@Injectable({
    providedIn: 'root'
})
export class MockService {
    getNavigationList(): List[] {
        return navigation;
    }

    getContent(): string {
        return text;
    }

    getCustomers(): Customer[] {
        return customers;
    }

    getPlanningData(): PlanningData[] {
        return MOCK_PLANNING_DATA.map((x, index) => ({ ...x, id: Date.now() + index }));
    }
}