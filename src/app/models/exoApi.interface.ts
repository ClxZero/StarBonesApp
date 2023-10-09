export interface ExoplanetApiResponse {
    items: ExoplanetsAPIObject[];
    more: boolean;
    page: number;
    per_page: number;
    total: number;
}

export interface ExoplanetsAPIObject {
    id?:                number;
    pl_hostname?:       string;
    pl_letter?:         string;
    display_name?:      string;
    description?:       string;
    discovery_date?:    string;
    url?:               string;
    title?:             string;
    feature_title?:     string;
    mass_display?:      string;
    planet_type?:       string;
    st_dist?:           number;
    st_optmag?:         number;
    pl_radj?:           number;
    pl_rade?:           number;
    pl_massj?:          number;
    pl_discmethod?:     string;
    image?:             string;
    list_image?:        string;
    short_description?: string;
    ranger_feature_id?: string;
    ranger_system_id?:  string;
    ranger_system?:     boolean;
    exo_id?:            string;
    subtitle?:          string;
    categories?:        any[];
    pl_kepflag?:        boolean;
    pl_facility?:       string;
    long_description?:  null;
}
