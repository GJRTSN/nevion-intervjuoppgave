export interface Launch {
  index: number;
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: {
        core_serial: string;
        flight: number;
        block: null | number;
        gridfins: boolean;
        legs: boolean;
        reused: boolean;
        land_success: null | boolean;
        landing_intent: boolean;
        landing_type: null | string;
        landing_vehicle: null | string;
      }[];
    };
    second_stage: {
      block: number;
      payloads: {
        payload_id: string;
        norad_id: number[];
        reused: boolean;
        customers: string[];
        nationality: string;
        manufacturer: string;
        payload_type: string;
        payload_mass_kg: number;
        payload_mass_lbs: number;
        orbit: string;
        orbit_params: {
          reference_system: string;
          regime: string;
          longitude: null | number;
          semi_major_axis_km: null | number;
          eccentricity: null | number;
          periapsis_km: number;
          apoapsis_km: number;
          inclination_deg: number;
          period_min: null | number;
          lifespan_years: null | number;
          epoch: null | number;
          mean_motion: null | number;
          raan: null | number;
          arg_of_pericenter: null | number;
          mean_anomaly: null | number;
        };
      }[];
    };
  };
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ship: null | string;
  };
  ships: string[];
  telemetry: {
    flight_club: null | string;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean;
  launch_failure_details: {
    time: number;
    altitude: null | number;
    reason: string;
  };
  links: {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: null | string;
    reddit_launch: null | string;
    reddit_recovery: null | string;
    reddit_media: null | string;
    presskit: null | string;
    article_link: string;
    wikipedia: string;
    video_link: string;
    youtube_id: string;
    flickr_images: string[];
  };
  details: string;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: {
    webcast_liftoff: number;
  };
  crew: null;
}
