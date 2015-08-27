Rails.application.configure do

  config.assets.enabled = true
  config.assets.paths << Rails.root.join('/app/assets/fonts')
  config.assets.precompile += %w( .svg .eot .woff .ttf )

  config.cache_classes = false
  config.eager_load = false

  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  config.action_mailer.raise_delivery_errors = false

  config.active_support.deprecation = :log

  config.active_record.migration_error = :page_load

  config.assets.debug = true

  config.assets.digest = true

  config.assets.raise_runtime_errors = true
end
