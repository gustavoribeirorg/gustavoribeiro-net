# Script auxiliar para compatibilizar o Ruby 2.6 com o SDK do macOS moderno (darwin24 -> darwin25)
require 'rbconfig'
if RbConfig::CONFIG['rubyarchhdrdir'] && !File.exist?(RbConfig::CONFIG['rubyarchhdrdir'])
  fixed = RbConfig::CONFIG['rubyarchhdrdir'].sub('darwin24', 'darwin25')
  if File.exist?(fixed)
    RbConfig::CONFIG['rubyarchhdrdir'] = fixed
    RbConfig::MAKEFILE_CONFIG['rubyarchhdrdir'] = fixed
  end
end
